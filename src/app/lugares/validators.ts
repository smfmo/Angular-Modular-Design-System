import { FormControl, FormGroup, Validators } from '@angular/forms';

export class Validators_lugar {

    public camposForm: FormGroup;

    public constructor() {
        this.camposForm = new FormGroup({
            nome: new FormControl('', Validators.required),
            categorias: new FormControl('', Validators.required),
            localizacao: new FormControl('', Validators.required),
            url: new FormControl('', Validators.required),
            avaliacao: new FormControl('', Validators.required),
        });
    }

    public isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];
  }
}
