interface RecaptchaResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return Response.json(
        {
          success: false,
          message: 'Captcha token missing.',
        },
        { status: 400 },
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      console.error('RECAPTCHA_SECRET_KEY is not configured.');

      return Response.json(
        {
          success: false,
          message: 'Server configuration error.',
        },
        { status: 500 },
      );
    }

    const params = new URLSearchParams({
      secret: secretKey,
      response: token,
    });

    const googleResponse = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      },
    );

    const result = (await googleResponse.json()) as RecaptchaResponse;

    if (!result.success) {
      return Response.json(
        {
          success: false,
          message: 'Captcha verification failed.',
        },
        { status: 400 },
      );
    }

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error('Captcha verification error:', error);

    return Response.json(
      {
        success: false,
        message: 'Captcha verification error.',
      },
      { status: 500 },
    );
  }
}