import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css'
})
export class TestComponentComponent {
  numbers:number[] = []
  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void{
    this.http.get<number[]>('https://localhost:7234/api/test/get-numbers').subscribe(data => {
      console.log(data);
      this.numbers = data;
    })
  }
}
