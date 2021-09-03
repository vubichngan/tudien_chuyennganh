//import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordService } from 'src/app/service/word.service';
import { Word } from 'src/app/model/word.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  wordList:Word[];
  word:Word;
  tu_en:String;
  nghia_en:String;
  tu_vi:String;
  nghia_vi:String;
  anh:String;
  tu_lienquan:String;
  constructor(private wordService: WordService, private route:Router) {
  }

  ngOnInit(): void {
    this.wordService.showWord().subscribe((response: any)=>{
      this.wordList=response;
      console.log(response);
    })
  }

  createWordUs(){
    var words={
      tu_en: this.tu_en,
      nghia_en:this.nghia_en,
      tu_vi:this.tu_vi,
      nghia_vi:this.nghia_vi,
      anh:this.anh,
      tu_lienquan:this.tu_lienquan,
    };
    this.wordService.createWord(words).subscribe((response: any)=>{
      console.log(response);
      this.ngOnInit();
    })
  }

  deleteWord(id:any){
    this.wordService.deleteWord(id).subscribe((response: any)=>{
      console.log(response);
    })
    this.ngOnInit();
  }
}
