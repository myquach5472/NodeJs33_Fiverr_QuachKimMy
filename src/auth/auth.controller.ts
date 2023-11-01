import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';
import { SignUpType } from './enitities/auth.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("auth")
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/signin")
  login(@Body() body: LoginDto){
return this.authService.login(body);
  }


  @Post("/signup")
  signUp(@Body() body: SignUpType){
    return this.authService.signUp(body);
      }
}
