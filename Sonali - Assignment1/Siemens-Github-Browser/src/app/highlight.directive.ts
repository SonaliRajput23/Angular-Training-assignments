import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // constructor(private elRef: ElementRef) { //ElementRef is a wrapper around native element
  //   elRef.nativeElement.style.backgroundColor = 'yellow';
  // } 

  @Input() hoverColor: string = 'yellow';

  constructor(private elRef: ElementRef) { }

  setBgColor(color: string){
    this.elRef.nativeElement.style.backgroundColor = color;
  }
  
  @HostListener('mouseenter')
  onMouseEnter(){
    this.setBgColor(this.hoverColor);
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.setBgColor('white');
  }
}
