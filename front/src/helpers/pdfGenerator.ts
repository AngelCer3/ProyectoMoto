import jsPDF from "jspdf"

interface Informacion{
    id: any
    nombres: any 
    apellidos: any 
    email: any 
    telefono: any 
    whatsapp: any 
    direccion: any
    marca: any
    modelo: any
    cilindrada: any
    tipo: any
    placa: any 
    color: any
    fecha: any
    anticipo: any 
    kilometraje: any 
    combustible:any 
    presupuesto: any
    concepto:any; 
    observaciones:any;
}

export const pdfGenerator = async({id, nombres, apellidos, email, telefono, whatsapp, direccion,marca, modelo, cilindrada, tipo, placa, color, fecha,anticipo, kilometraje, combustible, presupuesto, concepto, observaciones}: Informacion) => {

    const ancho = 21.59;
    const marginX = 3;
    const marginY = 2.54;
    const dentroDeMargenesX = ancho - marginX * 2;


    const pdf = new jsPDF("portrait","cm", "letter", true)

    await pdf.addImage("/img/Logo-Moto.png", "PNG", ancho/2 - 1.25, marginY , 2.5, 2.55)

    pdf.setFont("Comic-Sans", "bold");
    pdf.setTextColor("#0a0908");
    pdf.setFontSize(20);

    pdf.text("Motorcycle Workshop", ancho/2, marginY-0.5,{align: "center"});

    

    pdf.setTextColor("#0a0908");

    pdf.setFontSize(14);

    pdf.text("Datos del cliente", marginX + 7.80, marginY + 3.1 , {align: "center"});
    pdf.text(`Nombre del Cliente: ${nombres}`, marginX + 7.80, marginY + 3.6, {align: "center"});
    pdf.text(`Apellidos: ${apellidos}`,marginX + 7.80, marginY + 4.1, {align: "center"})
    pdf.text(`Direccion: ${direccion}`, marginX + 7.80, marginY + 4.6, {align: "center"});
    pdf.text(`Telefono: ${telefono}`, marginX + 7.80, marginY + 5.1, {align: "center"});
    pdf.text(`Correo: ${email}`, marginX + 7.80, marginY + 5.6, {align: "center"});
    pdf.text(`WhatsApp: ${whatsapp}`, marginX + 7.80, marginY + 6.1, {align: "center"});



   

    pdf.setFontSize(14);

    pdf.text("Datos de motocicleta", marginX + 7.80, marginY + 7.1, {align: "center"});
    pdf.text(`Marca: ${marca}`, marginX + 7.80, marginY + 7.6, {align: "center"});
    pdf.text(`Modelo: ${modelo}`, marginX + 7.80, marginY + 8.1, {align: "center"});
    pdf.text(`Cilindrada: ${cilindrada}`, marginX + 7.80, marginY + 8.6, {align: "center"});
    pdf.text(`Color: ${color}`, marginX + 7.80, marginY + 9.1, {align: "center"});
    pdf.text(`Tipo: ${tipo}`, marginX + 7.80, marginY + 9.6, {align: "center"});
    pdf.text(`Placa: ${placa}`, marginX + 7.80, marginY + 10.1, {align: "center"});

    

    

    pdf.setFontSize(14);

    pdf.text("Datos del servicio", marginX + 7.80, marginY + 11.1, {align: "center"});
    pdf.text(`Fecha del servicio: ${fecha}`, marginX + 7.80, marginY+11.6, {align: "center"});
    pdf.text(`Anticipo: ${anticipo}`, marginX + 7.80, marginY+ 12.1, {align: "center"});
    pdf.text(`Kilometraje: ${kilometraje}`, marginX + 7.80, marginY + 12.6, {align: "center"});
    pdf.text(`Combustible: ${combustible}`, marginX + 7.80, marginY + 13.1, {align: "center"});
    pdf.text(`Presupuesto: ${presupuesto}`, marginX + 7.80, marginY + 13.6, {align: "center"});
    pdf.text(`Concepto: ${concepto}`, marginX + 7.80, marginY + 14.1, {align: "center"});
    pdf.text(`Observaciones: ${observaciones}`, marginX + 7.80, marginY + 14.6 ,{align: "center"});

    await pdf.addImage("/img/Logo-Moto-PDF.png", "PNG", ancho/2 - 5, marginY + 15,10,10 )

    pdf.save(`${id}`)
}