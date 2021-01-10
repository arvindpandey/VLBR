import { Time } from '@angular/common';

export class LoginModel {
    private userId: number;
    private userName: string;
    private active: boolean;
    private createTimeStamp: Time;
    private dayPhoneNumber: string;
    private eveningPhoneNumber: string;
    private cellPhoneNumber: string;
    private addressStreet: string;
    private city: string;
    private state: string;
    private country: string;
    private password: string;
    private emailAddress: string;

    get UserId() {
        return this.userId;
    }
    get UserName() {
        return this.UserName;
    }
    get Password() {
        return this.password;
    }
}
