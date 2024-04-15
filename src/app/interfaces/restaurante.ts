export interface Restaurante {
    id: number;
    name: string;
    category: string;
    tel: string;
    dir: string;
    prov: string;
    mail?: string; // Opcional porque podría ser null
    schedule?: string;
    ig?: string; // Opcional porque podría ser null
    fb?: string; // Opcional porque podría ser null
    web?: string; // Opcional porque podría ser null
    img?: string; // Opcional porque podría ser null
}
