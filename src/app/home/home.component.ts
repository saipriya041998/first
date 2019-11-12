import { Component, OnInit, TemplateRef } from '@angular/core';
import { ArticleService } from '../article.service';
import { Kbarticle } from './kbarticles';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  arr: Kbarticle[];
  all_art: Kbarticle[];
  mess;
  modalRef: BsModalRef;
  constructor(private data: ArticleService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.data.getallarticles().subscribe(
      (x: Kbarticle[]) => {
        this.arr = x;
        console.log(this.arr);
        this.all_art = this.arr['kbArticles'];
        console.log(this.all_art);
      },
      function(error) {
        this.mess = true;
      }, function() {}
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
