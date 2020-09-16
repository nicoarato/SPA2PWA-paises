import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisesService } from 'src/app/services/paises.service';
import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  pais: PaisInterface;

  constructor(
    public paisesService: PaisesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.paisesService.getPaisPorID( id ).then( pais => {
      if ( !pais ) {
        return this.router.navigateByUrl('/');
        // console.log('Hola ', pais);
      }

      this.pais = pais;
      console.log(this.pais);
    });
  }

}
