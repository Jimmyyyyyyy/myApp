import { Component, OnInit } from '@angular/core';
import {PeliculasService, pelis} from '../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';
import { NavController, LoadingController  } from "@ionic/angular";
import {PeliInterfaz} from '../../models/peli.interface';
@Component({
  selector: 'app-add-peliculas',
  templateUrl: './add-peliculas.page.html',
  styleUrls: ['./add-peliculas.page.scss'],
})
export class AddPeliculasPage implements OnInit {

  pelicula:PeliInterfaz={
   
  Titulo:'',
  Genero:'',
  Director:'',
  Descripcion:'',
  img:''
  }
  
peliculaId= null;

  constructor(private route:ActivatedRoute, private nav:NavController, private peliservice:PeliculasService,
    private loading: LoadingController) { }

  ngOnInit() {
    this.peliculaId=this.route.snapshot.params['id'];
  
  }
  close(){
    this.nav.navigateForward('/');
  }
  
 async guardarPelis(peliId){
  
   if(this.peliculaId){
     
     this.peliservice.updatePelicula(this.pelicula, this.peliculaId).then(()=>{

       this.nav.navigateForward('/home');
     })

   }else{
     

     this.peliservice.addPelicula(this.pelicula).then(()=>{

      this.nav.navigateForward('/home');
      });}
 }

 
  async onRemoveTo(id:string) {
    this.peliservice.remove(id);
  }

  async cargarPeliculas(){
    const loading = await this.loading.create({
      message: 'Loading....'
    });
    await loading.present();

    this.peliservice.getTodo(this.peliculaId).subscribe(peli => {
      loading.dismiss();
      this.pelicula=peli;
    });
  }

 
}
