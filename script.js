gun=new Date ().getDay();
function gunyaz(){
    switch(gun){
        case 0:document.write(" Bugün pazar");
        break;
        case 1:document.write("Bugün pazartesi");
        break;
        case 2:document.write("Bugün salı");
        break;
        case 3:document.write("Bugün çarşamba");
        break;
        case 4:document.write("Bugün perşembe");
        break;
        case 5:document.write("Bugün cuma");
        break;
        case 6:document.write(" Bugün cumartesi");
        break;
    
    }
}
gunyaz();