import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MovieProvider} from '../../providers/movie/movie'
/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()

 @Component({
 	selector: 'page-feed',
 	templateUrl: 'feed.html',
 	providers:[
 	MovieProvider
 	]
 })
 export class FeedPage {
 	
 	public lista_filmes = new Array<any>();

 	public object_feed = {
 		titulo: "Felipe Pereira",
 		data: ">January 5, 2017",
 		descricao:"Trying to make this work...Feeling Happy",
 		qntd_likes: 12,
 		qntd_comments:4,
 		time_comment:"11h ago"
 	}

 	constructor(
 		public navCtrl: NavController,
 		public navParams: NavParams,
 		private movieProvider : MovieProvider
 		)
 	{}

 	ionViewDidLoad() {
 		this.movieProvider.getLastestMovies().subscribe(data=>{
 			const response = (data as any);
 			const objeto_retorno = JSON.parse(response._body);
 			this.lista_filmes = objeto_retorno.results;
 			console.log(objeto_retorno);
 		},error =>{
 			console.log(error);
 		})
 	}
 		
 }
