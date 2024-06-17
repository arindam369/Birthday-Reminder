import { Routes } from "@angular/router";
import { AddBirthdayComponent } from "./birthday/add-birthday/add-birthday.component";
import { ViewBirthdaysComponent } from "./birthday/view-birthdays/view-birthdays.component";
import { HomeComponent } from "./home/home.component";
import { UpcomingBirthdaysComponent } from "./birthday/upcoming-birthdays/upcoming-birthdays.component";

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "upcoming",
        component: UpcomingBirthdaysComponent
    },
    {
        path: "reminders",
        component: ViewBirthdaysComponent
    },
    {
        path: "add",
        component: AddBirthdayComponent
    }
]