import { Injectable } from "@angular/core";
import { BirthdayInput } from "../models/birthday.model";
import { dummyBirthdays } from "../dummy-birthday";

@Injectable({providedIn: "root"})
export class BirthdayService{
    birthdays = [];
    constructor(){
        this.birthdays = dummyBirthdays;
    }

    // private saveBirthdays(){
    //     localStorage.setItem("birthday-reminder", JSON.stringify(this.birthdays));
    // }
    addBirthday(data: BirthdayInput){
        const newBirthday = {
            id: new Date().getTime().toString(),
            ...data
        };
        this.birthdays.push(newBirthday);
    }
    removeBirthday(id: string){
        this.birthdays = this.birthdays.filter((birthday)=>(birthday.id !== id));
    }
    viewAllBirthdays(){
        this.birthdays.sort((a, b)=>{
            if(a.month === b.month) return +a.day - +b.day;
            else return +a.month - +b.month;
        });
        return this.birthdays;
    }
}