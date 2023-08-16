import { LightningElement } from 'lwc';
import getDogPicture from '@salesforce/apex/DogPictureApiLWC.getDogPicture' //nome da classe.nome do metodo

export default class DogApi extends LightningElement {

    imageReady  = false;
    loadingSpinner =  false;
    pictureUrl;

    handleClick(){
        this.loadingSpinner = true;
        this.imageReady = false;
        getDogPicture({}).then(result => {
            this.pictureUrl = JSON.parse(result).message;
            this.loadingSpinner = false;
            this.imageReady = true;

        })
    }
}