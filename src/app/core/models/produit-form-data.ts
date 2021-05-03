import { Produit } from "./produit";

export interface ProduitFormData {
    toUpdate: boolean;
    produit: Produit;
}