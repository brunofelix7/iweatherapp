import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {

    public user: Observable<firebase.User>;

    public constructor(private firebaseAuth: AngularFireAuth) {
        this.user = firebaseAuth.authState;
    }

    /**Metodo de cadastro */
    public register(user: User) {
        return this.firebaseAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }

    /**Metodo de login */
    public login(user: User) {
        return this.firebaseAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    }

    /**Metodo de logout */
    public logout() {
        return this.firebaseAuth.auth.signOut();
    }

}
