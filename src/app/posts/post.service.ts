import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Post } from './post';
import { Capitulos } from './capitulos';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class PostService {

  private capitulos: Capitulos[] = [
    {
      titulo: 'Capítulo 1',
      video: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCanalTeleantioquia%2Fvideos%2F444181556387422%2F&show_text=0&width=560',
      titulito: 'Se abren las puertas de La Condesa',
      descripcion: 'Después de estar perdidos por un largo tiempo, Rosario y Matías por fin llegan a la finca La Condesa con el objetivo de pasar un gran fin de semana en junto a otros compañeros de su universidad. Antonio, el mayordomo de la finca, es el primero en recibirlos y les informa que sus amigos no han llegado. Al entrar, conocen a Rafael, el dueño del lugar, quien les muestra las instalaciones y les asegura que van a pasar uno días inolvidables. Ya solos, Matías pone en marcha su plan de conquista y se le acerca a Rosario, mientras Rafael se conecta en la red, mostrándoles a los usuarios todo lo que pasa con esta pareja en tiempo real.',
      tupuedes: 'Tú puedes elegir el destino de esta historia',
      iframeFB: 'https://www.facebook.com/100150961991/posts/10157051869281992/'
    },

    {
      titulo: 'Capítulo 1',
      video: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCanalTeleantioquia%2Fvideos%2F444181556387422%2F&show_text=0&width=560',
      titulito: 'Se abren las puertas de La Condesa',
      descripcion: 'Después de estar perdidos por un largo tiempo, Rosario y Matías por fin llegan a la finca La Condesa con el objetivo de pasar un gran fin de semana en junto a otros compañeros de su universidad. Antonio, el mayordomo de la finca, es el primero en recibirlos y les informa que sus amigos no han llegado. Al entrar, conocen a Rafael, el dueño del lugar, quien les muestra las instalaciones y les asegura que van a pasar uno días inolvidables. Ya solos, Matías pone en marcha su plan de conquista y se le acerca a Rosario, mientras Rafael se conecta en la red, mostrándoles a los usuarios todo lo que pasa con esta pareja en tiempo real.',
      tupuedes: 'Tú puedes elegir el destino de esta historia',
      iframeFB: 'https://www.facebook.com/100150961991/posts/10157051869281992/'
    },

    {
      titulo: 'Capítulo 2',
      titulito: 'Una extraña presencia',
      video: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCanalTeleantioquia%2Fvideos%2F2250773121837621%2F&show_text=0&width=560',
      descripcion: 'Mientras Rosario y Matías intentan dormir, extrañas sombras rondar a la pareja, ratificando que fuera de normal sucede en La Condesa. Estos raros acontecimientos aumentan el interés de las personas que se han conectado con la transmisión de Rafael. Al despertar, se percatan que sus amigos no han llegado y deciden recorrer el lugar en la búsqueda de señal para el celular, para tratar de localizar a sus compañeros ya que desde la finca no se pueden hacer llamadas. Rosario empieza a desconfiar de Matías y decide regresar a la ciudad.',
      tupuedes: 'Tú puedes elegir el destino de esta historia',
      iframeFB: 'https://www.facebook.com/100150961991/posts/10157066786461992/'
    },

    {
      titulo: 'Capítulo 3',
      titulito: 'Se materializan los temores',
      video: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCanalTeleantioquia%2Fvideos%2F444181556387422%2F&show_text=0&width=560',
      descripcion: 'Parece que Rosario y Matías no podrán salir de La Condesa porque todo se pone en su contra. En la pareja crece la desconfianza contra Antonio, pues su actitud es muy extraña y siniestra. Tras caer la noche y al no poder salir de la finca, ambos se resignan a dormir en la finca, pero no será un sueño placentero, porque lo que al principio solo era una presencia ahora toma forma.',
      tupuedes: 'Tú puedes elegir el destino de esta historia',
      iframeFB: 'votar'
    },

    {
      titulo: 'Capítulo 4',
      titulito: 'La pesadilla de Matías',
      video: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCanalTeleantioquia%2Fvideos%2F444181556387422%2F&show_text=0&width=560',
      descripcion: 'Matías es el primero es sufrir un fuerte ataque e incluso siente que estuvo a punto de morir. Al recuperarse le cuenta a Rosario sobre los extraños artículos que encontró mientras trataban de contactar a sus amigos y deciden regresar a ese lugar, donde hallan el carnet de la universidad de uno de los compañeros que no ha llegado a la finca. Esta situación los empuja a investigar sobre los que verdaderamente está pasando en La Condesa.',
      tupuedes: 'Tú puedes elegir el destino de esta historia',
      iframeFB: 'votar'
    },
    {
      titulo: 'Capítulo 5',
      titulito: 'La otra cara de Antonio',
      video: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCanalTeleantioquia%2Fvideos%2F444181556387422%2F&show_text=0&width=560',
      descripcion: 'Matías sufre un fuerte dolor pero sin importar su padecimiento va con Rosario a la casa de Antonio para les ayude a contactar a Rafael y a salir de La Condesa. Una vez allí descubren cientos de artículos extraños regados por la casa del mayordomo lo que hace desconfiar a la pareja aún más de él. Rosario le insiste a Antonio que deben llamar a Rafael para que los ayude a salir de la finca, pero este misterioso personaje hará todo lo que este a su alcance para evitarlo.',
      tupuedes: 'Tú puedes elegir el destino de esta historia',
      iframeFB: 'votar'
    },

    {
      titulo: 'Capítulo 6',
      titulito: 'La leyenda de La Condesa',
      video: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCanalTeleantioquia%2Fvideos%2F444181556387422%2F&show_text=0&width=560',
      descripcion: 'Rafael les cuenta a Rosario y a Matías la verdadera historia de La Condesa y les pide perdón por lo que desató con su oscuro negocio. Les dice que los ayudará a salir de la finca, pero será demasiado tarde, pues el futuro de todos ya está marcado.',
      tupuedes: 'Tú puedes elegir el destino de esta historia',
      iframeFB: 'votar'
    },
    {
      titulo: 'Capítulo 7',
      titulito: 'Se hace realidad la leyenda',
      video: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCanalTeleantioquia%2Fvideos%2F444181556387422%2F&show_text=0&width=560',
      descripcion: 'Rosario logra tener una conexión especial con su mamá que desde el más allá le tratará de ayudar para que salga de La Condesa. La salud de Matías empeora cada minuto, lo que obliga a la pareja a tratar de escarpar de la finca de cualquier manera, pero primero deberán enfrentarse a la entidad que controla la propiedad y que quiere su alma.',
      tupuedes: 'Tú puedes elegir el destino de esta historia',
      iframeFB: 'votar'
    },
  ];

  postsCollection: AngularFirestoreCollection<Post>;
  postDoc: AngularFirestoreDocument<Post>;
  posteos: Observable<Post[]>;

  constructor(public afs: AngularFirestore) {
    console.log('Servicio melo');
    this.postsCollection = this.afs.collection('post');
    this.posteos = this.postsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
      const data = a.payload.doc.data() as Post;
      data.id = a.payload.doc.id;
      return data;

      });
    }));
  // this.postsCollection = this.afs.collection('posts', ref => ref.orderBy('published', 'desc')); default
  // this.posteos = this.afs.collection('post').valueChanges(); // bueno!

  }

  // getPost() {
  //   return this.postsCollection.snapshotChanges().pipe(map(actions => {
  //     return actions.map(a => {
  //       const data = a.payload.doc.data() as Post;
  //       const id = a.payload.doc.id;
  //       return { id, ...data};
  //     });
  //   }));
  // }
  getCapitulos() {
    return this.capitulos;
  }

  getCapitulo(idx: string) {
    return this.capitulos[idx];
  }

  getAlexis() {
    return this.posteos;
  }

  getPostData(posteos: Post) {
    this.postDoc = this.afs.doc(`post/${posteos.id}`);
    return this.postDoc.valueChanges();

  }

  getPostData2(id: string) {
    this.postDoc = this.afs.doc(`post/${id}`);
    return this.postDoc.valueChanges();

  }

  getPost(id: string) {
    return this.afs.doc<Post>(`post/${id}`);
  }

  create(data: Post) {
    this.postsCollection.add(data);
  }
  // delete( id: string) {
  //   return this.afs.getAlexis(id).detele();
  // }
  update( id: string, formData){
    return this.getPost(id).update(formData);
  }

}



