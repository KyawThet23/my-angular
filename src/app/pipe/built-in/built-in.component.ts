import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { KebabCasePipe } from '../kebab-case.pipe';

@Component({
  selector: 'app-built-in',
  standalone: true,
  imports: [CurrencyPipe,TitleCasePipe,DatePipe,KebabCasePipe],
  templateUrl: './built-in.component.html',
  styleUrl: './built-in.component.css'
})

export class BuiltInComponent {
  amount = 123.45;  
  company = 'acme corporation';  
  purchasedOn = '2024-07-08';
  text = 'hello world';
}
