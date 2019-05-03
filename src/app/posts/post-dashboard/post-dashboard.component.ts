import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Observable} from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';



@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  // author: string;
  title: string;
  image: string = null;
  author: string;
  correo: string;
  content: string;
  ytvideo: string;

  buttonText = 'Crear Possst';

  uploadPorcentaje: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private postService: PostService,
              private storage: AngularFireStorage
    ) { }

  ngOnInit() {
  }

  createPost() {
    const data = {
      author: this.author,
      correo: this.correo,
      content: this.content,
      image: this.image,
      title: this.title,
      ytvideo: this.ytvideo,
    };
    this.postService.create(data);
    this.title = '';
    this.author = '';
    this.correo = '';
    this.content = '';
    this.buttonText = 'Historia Creada!';
    setTimeout(() => (this.buttonText = '¿Crear Nuevamente?'), 3000);

  }

  uploadImage(event) {
    const file = event.target.files[0];
    const path = `posts/${file.name}`;
    console.log (event.target.files);
    if (file.type.split('/')[0] !== 'image') {
    return alert('solo imagenes!');
  } else {
    const task = this.storage.upload(path, file);
    const ref = this.storage.ref(path);
    this.uploadPorcentaje = task.percentageChanges();
    // this.downloadURL = task.downloadURL();
    console.log('Imagen Cargada!');
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = ref.getDownloadURL();
        this.downloadURL.subscribe(url => (this.image = url));
      })
    )
    .subscribe();

  }

  }

}
