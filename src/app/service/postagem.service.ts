import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  //Buscar todas as postagens
  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>('https://blogglex.herokuapp.com/postagens', this.token)
  }

  //Buscar postagens por id
  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`https://blogglex.herokuapp.com/postagens/${id}`, this.token)
  }

  //Postar uma postagem
  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>('https://blogglex.herokuapp.com/postagens', postagem, this.token)
  }

  //Alterar uma postagem
  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>('https://blogglex.herokuapp.com/postagens', postagem, this.token)
  }

  //Deletar uma postagem
  deletePostagem(id: number) {
    return this.http.delete(`https://blogglex.herokuapp.com/postagens/${id}`, this.token)
  }

}
