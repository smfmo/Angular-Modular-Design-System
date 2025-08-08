import { CategoriaEntity } from "../categorias/categoria-entity";

export class LugarEntity { // modelo dos lugares
    public id?: number;
    public nome?: string;
    public categoria?: CategoriaEntity;
    public localizacao?: string;
    public url?: string;
    public avaliacao?: number;
}
