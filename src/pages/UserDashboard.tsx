import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  User, 
  MapPin, 
  ShoppingBag, 
  Heart, 
  CreditCard,
  FileText,
  Settings,
  Edit,
  Plus,
  Download
} from 'lucide-react';
import { mockCustomerOrders } from '@/data/mockData';

const UserDashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const [selectedTab, setSelectedTab] = useState('profile');

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: 'secondary',
      processing: 'default',
      shipped: 'default',
      delivered: 'default',
      cancelled: 'destructive'
    } as const;
    
    const labels = {
      pending: 'Pendente',
      processing: 'Processando',
      shipped: 'Enviado',
      delivered: 'Entregue',
      cancelled: 'Cancelado'
    };

    return (
      <Badge variant={variants[status as keyof typeof variants]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  const mockAddresses = [
    {
      id: '1',
      type: 'Casa',
      street: 'Rua das Flores, 123',
      district: 'Centro',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01234-567',
      isDefault: true
    },
    {
      id: '2',
      type: 'Trabalho',
      street: 'Av. Paulista, 456',
      district: 'Bela Vista',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01310-100',
      isDefault: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Minha Conta</h1>
              <p className="text-muted-foreground">Bem-vindo, {user?.name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="orders">Pedidos</TabsTrigger>
            <TabsTrigger value="addresses">Endereços</TabsTrigger>
            <TabsTrigger value="wishlist">Favoritos</TabsTrigger>
            <TabsTrigger value="wallet">Carteira</TabsTrigger>
            <TabsTrigger value="support">Suporte</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Informações Pessoais
                </CardTitle>
                <CardDescription>
                  Gerencie suas informações pessoais e preferências
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" defaultValue={user?.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={user?.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(11) 99999-9999" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" placeholder="000.000.000-00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthdate">Data de Nascimento</Label>
                    <Input id="birthdate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gênero</Label>
                    <Input id="gender" placeholder="Opcional" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button>Salvar Alterações</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alterar Senha</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Senha Atual</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nova Senha</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <div className="flex justify-end">
                  <Button>Alterar Senha</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Meus Pedidos
                </CardTitle>
                <CardDescription>
                  Histórico completo de suas compras
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockCustomerOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-medium">{order.id}</h3>
                          <p className="text-sm text-muted-foreground">
                            Pedido realizado em {new Date(order.date).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          {getStatusBadge(order.status)}
                          <p className="font-medium">R$ {order.total.toLocaleString('pt-BR')}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>{item.productName} x{item.quantity}</span>
                            <span>R$ {item.price.toLocaleString('pt-BR')}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Ver Detalhes
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Nota Fiscal
                        </Button>
                        {order.status === 'delivered' && (
                          <Button variant="ghost" size="sm">
                            Avaliar Produto
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="addresses" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Meus Endereços</h2>
                <p className="text-muted-foreground">Gerencie seus endereços de entrega</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Novo Endereço
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockAddresses.map((address) => (
                <Card key={address.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {address.type}
                      </div>
                      {address.isDefault && (
                        <Badge variant="secondary">Padrão</Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-sm mb-4">
                      <p>{address.street}</p>
                      <p>{address.district} - {address.city}, {address.state}</p>
                      <p>CEP: {address.zipCode}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Editar
                      </Button>
                      {!address.isDefault && (
                        <Button variant="ghost" size="sm">
                          Definir como Padrão
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wishlist" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Lista de Desejos
                </CardTitle>
                <CardDescription>
                  Produtos que você salvou para comprar depois
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Sua lista está vazia</h3>
                  <p className="text-muted-foreground mb-4">
                    Adicione produtos à sua lista de desejos para salvá-los aqui
                  </p>
                  <Button>Explorar Produtos</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wallet" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Saldo em Carteira
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">
                    R$ 45,80
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Créditos disponíveis para suas compras
                  </p>
                  <Button variant="outline" className="w-full">
                    Adicionar Créditos
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cashback Acumulado</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-success mb-2">
                    R$ 127,50
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Economia total com cashback
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    Histórico de Cashback
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Histórico Financeiro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Sem movimentações</h3>
                  <p className="text-muted-foreground">
                    Seu histórico financeiro aparecerá aqui
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Central de Ajuda</CardTitle>
                <CardDescription>
                  Precisa de ajuda? Estamos aqui para você
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-20">
                    <div className="text-center">
                      <FileText className="h-6 w-6 mx-auto mb-2" />
                      <div className="text-sm">
                        <div className="font-medium">Abrir Chamado</div>
                        <div className="text-muted-foreground">Relate um problema</div>
                      </div>
                    </div>
                  </Button>

                  <Button variant="outline" className="h-20">
                    <div className="text-center">
                      <Settings className="h-6 w-6 mx-auto mb-2" />
                      <div className="text-sm">
                        <div className="font-medium">FAQ</div>
                        <div className="text-muted-foreground">Perguntas frequentes</div>
                      </div>
                    </div>
                  </Button>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Contato Direto</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Telefone:</strong> (11) 3000-0000</p>
                    <p><strong>WhatsApp:</strong> (11) 99999-9999</p>
                    <p><strong>E-mail:</strong> suporte@techstore.com</p>
                    <p><strong>Horário:</strong> Segunda a Sexta, 8h às 22h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;