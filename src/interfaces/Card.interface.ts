export interface CardSocialProps {
  children: JSX.Element
}

export interface CardProps {
  data: {
    cidade: string,
    nome: string,
    data: Date,
    localização: string,
    mensagem: string,
    topico: {
      id: number,
      item: string
    }[]
  }
}