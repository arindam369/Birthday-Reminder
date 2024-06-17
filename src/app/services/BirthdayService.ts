import { Injectable } from "@angular/core";
import { BirthdayInput } from "../models/birthday.model";
import { dummyBirthdays } from "../dummy-birthday";

@Injectable({providedIn: "root"})
export class BirthdayService{
    birthdays = [];
    constructor(){
        this.birthdays = JSON.parse(localStorage.getItem("birthday-reminder")) || [];
    }

    private saveBirthdays(){
        localStorage.setItem("birthday-reminder", JSON.stringify(this.birthdays));
    }
    addBirthday(data: BirthdayInput){
        const newBirthday = {
            id: new Date().getTime().toString(),
            ...data
        };
        this.birthdays.push(newBirthday);
        this.saveBirthdays();
    }
    removeBirthday(id: string){
        this.birthdays = this.birthdays.filter((birthday)=>(birthday.id !== id));
        this.saveBirthdays();
    }
    viewAllBirthdays(){
        this.birthdays.sort((a, b)=>{
            if(a.month === b.month) return +a.day - +b.day;
            else return +a.month - +b.month;
        });
        return this.birthdays;
    }
    viewAllUpcomingBirthdays(){
        const upcomingBirthdays = [];
        
        this.birthdays.forEach((birthday)=>{
            const dayDifference = this.findDaysLeft(birthday.day, birthday.month);
            if (dayDifference >= -1 && dayDifference <= 30) {
                upcomingBirthdays.push(birthday);
            }
        })
        upcomingBirthdays.sort((a, b)=>{
            if(a.month === b.month) return +a.day - +b.day;
            else return +a.month - +b.month;
        });
        return upcomingBirthdays;
    }
    
    findDaysLeft(day: string, month: string){
        const today = new Date();
        const todayYear = today.getFullYear();
        const birthdayDate = new Date(todayYear, +month-1, +day);
        const timeDifference = birthdayDate.getTime() - today.getTime();
        const dayDifference = (timeDifference / (1000 * 3600 * 24));
        return dayDifference;
    }
}