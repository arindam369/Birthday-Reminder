import { Routes } from "@angular/router";
import { AddBirthdayComponent } from "./birthday/add-birthday/add-birthday.component";
import { ViewBirthdaysComponent } from "./birthday/view-birthdays/view-birthdays.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "upcoming",
        component: AddBirthdayComponent
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