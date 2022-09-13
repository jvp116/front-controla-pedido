import { Cliente } from './cliente.model';
import { ItemPedido } from './itemPedido.model';
export class Pedido {
  id: string;
  data: Date;
  cliente: Cliente;
  itens: ItemPedido[];
}
