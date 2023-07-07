import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavbarScrolly]'
})
export class NavbarScrollyDirective {

  @HostBinding('class.new-nav') newNav: boolean;

  @HostListener('window:scroll') onScroll() {
    if(window.scrollY >= 50) {
      this.newNav = true;
    } else {
      this.newNav = false;
    }

  }
}
