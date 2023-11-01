import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService {
    model = new PrismaClient();
    async login(body) {
        let { email, pass_word } = body;
        let checkEmail = await this.model.nguoiDung.findFirst({ where: { email } })
        if (!checkEmail) {
            return 'Email Not Found!';
        }
        const passwordMatch = await bcrypt.compare(pass_word, checkEmail.pass_word);
        if (!passwordMatch) {
            return 'Wrong password.';
        }
        return 'Login succesfully!';

    }

    async signUp(body) {
    const { name, email, pass_word, phone, birth_day, gender, role, skill, certification } = body;
    let checkEmail = await this.model.nguoiDung.findFirst({ where: { email } })
        if (checkEmail) {
            return 'Email already exists.';
        }
        const hashedPassword = await bcrypt.hash(pass_word, 10);
        const newUser = await this.model.nguoiDung.create({
            data: {
                name,
                email,
                pass_word: hashedPassword,
                phone,
                birth_day,
                gender,
                role,
                skill,
                certification,
            },
        });

        return 'Registered successfully!';
}
}