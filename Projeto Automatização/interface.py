import customtkinter as ct
from validar import validacoes as vali
from Automatização import iniciar

def confirma(vp, vf, vl):
    cor = '#ff006a' # Vermelho
    cor2 = '#00ff37' # Verde

    # Verifica se o valor inserido pelo usuário está correto e retorna mensagem de erro
    if not vali.planilha(vp):
        valor_planilha.configure(border_color=cor, border_width=2)
        text_erro_planilha = ct.CTkLabel(frame2,text='Formato errado ou o arquivo não existe', text_color=cor)
        text_erro_planilha.place(x=370, y=50)
        frame2.after(3000, lambda:text_erro_planilha.configure(text=''))
    else:
        valor_planilha.configure(border_color=cor2, border_width=2) # Muda a cor para verde

    # Retorna uma mensagem de erro
    if not vali.folha(vp, vf):
        valor_folha.configure(border_color=cor, border_width=2)
        text_erro_folha = ct.CTkLabel(frame2,text='Folha não existe na planilha', text_color=cor)
        text_erro_folha.place(x=370, y=130)
        frame2.after(2000, lambda:text_erro_folha.configure(text=''))
    else:
        valor_folha.configure(border_color=cor2, border_width=2) # Muda a cor para verde
    
    # Retorna mensagem em caso
    if not vali.linhas(vl):
        valor_qtd.configure(border_color=cor, border_width=2)
        text_erro_qtd = ct.CTkLabel(frame2,text='Valor inserido deve um número positivo', text_color=cor)
        text_erro_qtd.place(x=370, y=200)
        frame2.after(2000, lambda:text_erro_qtd.configure(text=''))
    else:
        valor_qtd.configure(border_color=cor2, border_width=2) # Muda a cor para verde


    # Verifica se todos os valores estão corretos e finaliza o app
    if vali.planilha(vp) and vali.folha(vp, vf) and vali.linhas(vl) == True:
        iniciar(vp, vf, vl)
        app.after(2000, lambda:app.quit())
        

# Inicia o App
app = ct.CTk()
app.title('Cadastro de dados')
app.geometry('800x800')
app._set_appearance_mode('light')

# Criando um frame para agrupar conteúdo
frame = ct.CTkFrame(master=app, fg_color='#0043b0', height=100)
frame.pack(fill='x')

# Criando o título
text = ct.CTkLabel(frame,text='Cadastro de Dados', font=('Arial', 30), text_color='white', height=100)
text.pack()

# Criando segundo frame
frame2 = ct.CTkFrame(master=app, border_color='black', border_width=2, fg_color='white')
frame2.pack(pady=160)


text = ct.CTkLabel(frame2, text='Nome da planilha:', font=('Arial', 15), text_color='black', width=200)
text.pack(padx=150, pady=10)
# Input do nome da planilha
valor_planilha = ct.CTkEntry(frame2,placeholder_text='Nome da planilha', text_color='black', fg_color='white')
valor_planilha.pack(pady=6)

text = ct.CTkLabel(frame2, text='Nome da folha:', font=('Arial', 15), text_color='black')
text.pack(padx=250)
# Input do nome da folha
valor_folha = ct.CTkEntry(frame2,placeholder_text='Nome da folha', text_color='black', fg_color='white')
valor_folha.pack(pady=10)


text = ct.CTkLabel(frame2, text='Quantidade de linhas: ', font=('Arial', 15), text_color='black')
text.pack()
# Input da quantidade de linhas
valor_qtd = ct.CTkEntry(frame2,placeholder_text='0', text_color='black', fg_color='white')
valor_qtd.pack(pady=10)

btn = ct.CTkButton(frame2,text='Começar', width=70, command=lambda: confirma(valor_planilha.get(), valor_folha.get(), valor_qtd.get()))
btn.pack(pady=30)


# Encerra o app
app.mainloop()