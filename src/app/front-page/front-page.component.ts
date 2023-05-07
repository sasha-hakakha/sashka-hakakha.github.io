import { Component, ViewEncapsulation, OnInit, HostListener } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MatGridList } from '@angular/material/grid-list';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FrontPageComponent implements OnInit {
  numColumns = 1;

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Sasha');
    this.metaService.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    }, 'name=viewport');
    this.numColumns = (window.innerWidth <= 768) ? 1 : 2;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.numColumns = (event.target.innerWidth <= 768) ? 1 : 2;
  }
}
