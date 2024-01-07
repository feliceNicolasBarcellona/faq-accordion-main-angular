import { FaqItem } from './../../model/faq-item';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  @Input() faqItem: FaqItem[] | null = null;

  clickedIndex: number | null = null;

  toggleAccordion(index: number ): void {
    this.clickedIndex = this.clickedIndex === index ? null : index;
  }
}
