import {  FormatDateType } from "../types";

export function FormatDate(date : string) {
// Convertir la cadena a un objeto Date
const fecha: Date = new Date(date);
// Obtener partes de la fecha
const dia: number = fecha.getDate();
const mes: number = fecha.getMonth() + 1; // Los meses empiezan desde 0, así que se suma 1
const anio: number = fecha.getFullYear();
// Obtener la hora en formato 12 horas
    let horas: number = fecha.getHours();
    let minutos : number | string = fecha.getMinutes();
    const ampm: string = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12;
    horas = horas ? horas : 12; // El '0' de la medianoche se convierte en '12'
// Añadir cero delante de los minutos si es necesario
    minutos = minutos < 10 ? '0' + minutos : minutos;
// Formatear el resultado
    const fechaFormateada: FormatDateType = `${dia}-${mes}-${anio} a las ${horas}:${minutos} ${ampm}`;
    return fechaFormateada;
}