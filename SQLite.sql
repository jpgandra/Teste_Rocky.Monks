select database_corrigida_2.c2 as marcas, c5 As veículos, SUM(c3) AS vendas, SUM(c3*c4) as valor_total_das_vendas, (SUM(c3*c4))/(SUM(c3)) as valor_médio_final_do_veículo
FROM database_corrigida_1 join database_corrigida_2 on database_corrigida_1.c2=database_corrigida_2.c1
group by database_corrigida_1.c2, c5;