import { Cliente } from './cliente.model';
import { ItemPedido } from './itemPedido.model';
export class Pedido {
  id: string;
  data: string;
  cliente: Cliente;
  itens: ItemPedido[];
}
