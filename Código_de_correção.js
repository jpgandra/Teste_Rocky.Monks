
const fs = require('fs');

let [w, y] = leitura();

[w, y] = Correção_Nomes(w, y);

w = Correção_Vendas(w);

Exportar(w,y);




function leitura()
{
    let w =require('./broken_database_1.json');
    let y =require('./broken_database_2.json');
    return[w, y];
}

function Correção_Nomes(w, y)
{
    let z=0;
    for(let z=0;z<(w.length);z++)
    {
        let q=0;
        const aux= w[z]["nome"].split('');
        let aux2= null;
        for(q=0;q<((w[z]["nome"]).length);q++)
        {
            if(q == 0)
            {
                if(aux[q] == 'æ')
                {
                    aux2 ='A';
                }
                else
                {
                    if(aux[q] == 'ø')
                    {
                        aux2 ='O';
                    }
                    else
                    {
                        aux2 = aux[q];
                    }
                }
            }
            else
            {
                if(aux[q] == 'æ')
                {
                    aux2 +='a';
                }else
                {
                    if(aux[q] == 'ø')
                    {
                        aux2 +='o';
                    }
                    else
                    {
                        aux2 += aux[q];
                    }
                }
            }
        }
        aux2 = aux2.toString();
        w[z]["nome"]=aux2;
    }
    for(let z=0;z<(y.length);z++)
    {
        let q=0;
        const aux= y[z]["marca"].split('');
        let aux2= null;
        for(q=0;q<((y[z]["marca"]).length);q++)
        {
            if(q == 0)
            {
                if(aux[q] == 'æ')
                {
                    aux2 ='A';
                }
                else
                {
                    if(aux[q] == 'ø')
                    {
                        aux2 ='O';
                    }
                    else
                    {
                        aux2 = aux[q];
                    }
                }
            }
            else
            {
                if(aux[q] == 'æ')
                {
                    aux2 +='a';
                }
                else
                {
                    if(aux[q] == 'ø')
                    {
                        aux2 +='o';
                    }
                    else
                    {
                        aux2 += aux[q];
                    }
                }
            }
        }
        aux2 = aux2.toString();
        y[z]["marca"]=aux2;
    }
    return[w, y];
}

function Correção_Vendas(w)
{
    let z=0;
    for(let z=0;z<(w.length);z++)
    {
        if((typeof (w[z]["vendas"])) === "string")
        {
            w[z]["vendas"] = parseInt(w[z]["vendas"]);
        }
    }
    return w;
}

function Exportar(w, y)
{
    w = JSON.stringify(w);
    y = JSON.stringify(y);
    
    fs.writeFile('./database_corrigida_1.json', w, 'utf-8', (error,result)=>{ 
        if(error)
        {
            console.error(error);
            return;
        }
        console.log(result);
    })
    
    fs.writeFile('./database_corrigida_2.json', y, 'utf-8', (error,result)=>{ 
        if(error)
        {
            console.error(error);
            return;
        }
        console.log(result);
    })
}