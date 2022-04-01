import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { CalculService } from '../services/calcul.service';
@Component({
  selector: 'app-lis-user',
  templateUrl: './lis-user.component.html',
  styleUrls: ['./lis-user.component.css']
})
export class LisUserComponent implements OnInit {
  teacherNumber : number;
listUser : User[];
  constructor( private calculService : CalculService) { }

  ngOnInit(): void {
this.listUser = [
  {
    id: 1,
    name: 'wael',
    phone: '27230640',
    email: 'wael.kefi@esprit.tn',
    job: 'teacher',
    picture: 'string'
  },
  {
    id: 1,
    name: 'jah',
    phone: '206425250',
    email: 'wael.kefi@gmail.tn',
    job: 'web developer',
    picture: 'string'
  },
]
  }

delete (user : User) : void{
let i = this.listUser.indexOf(user)
if (i!=-1) {
  this.listUser.splice(i,1)
}
}

getStatTeacher() {
  this.teacherNumber = this.calculService.getStat(this.listUser,  'job', 'teacher')
  }

}
