import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Player {
  id: number;
  nickname: string;
  realName: string;
  role: string;
}

const players: Player[] = [
  { id: 1, nickname: 'DeathLord', realName: 'Алексей Иванов', role: 'AWPer' },
  { id: 2, nickname: 'ShadowKing', realName: 'Дмитрий Петров', role: 'Entry Fragger' },
  { id: 3, nickname: 'Lightning', realName: 'Максим Сидоров', role: 'Rifler' },
  { id: 4, nickname: 'Phantom', realName: 'Сергей Новиков', role: 'Support' },
  { id: 5, nickname: 'Commander', realName: 'Андрей Козлов', role: 'IGL' },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-background font-body">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-heading font-bold text-primary-foreground">DL</span>
              </div>
              <div>
                <h1 className="text-2xl font-heading font-bold text-primary">DL-TEAM</h1>
                <p className="text-xs text-muted-foreground">CS:2 Professional Team</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <Button variant={activeTab === 'home' ? 'default' : 'ghost'} onClick={() => setActiveTab('home')}>
                Главная
              </Button>
              <Button variant={activeTab === 'team' ? 'default' : 'ghost'} onClick={() => setActiveTab('team')}>
                Состав
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-card to-card p-8 md:p-16 border border-primary/20">
              <div className="relative z-10">
                <Badge className="mb-4 bg-primary text-primary-foreground">Профессиональная команда CS:2</Badge>
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-foreground">
                  DL-Team<br />Counter-Strike 2
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Мы — команда профессиональных игроков Counter-Strike 2
                </p>
              </div>
            </section>


          </div>
        )}



        {activeTab === 'team' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-heading font-bold text-foreground mb-2">Состав команды</h2>
              <p className="text-muted-foreground">Лучшие игроки киберспорта</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {players.map((player, index) => (
                <Card key={player.id} className="hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-heading text-2xl text-primary">{player.nickname}</CardTitle>
                        <CardDescription className="text-foreground/70">{player.realName}</CardDescription>
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary">{player.role}</Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}


      </main>

      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-xl font-heading font-bold text-primary-foreground">DL</span>
              </div>
              <div>
                <div className="font-heading font-bold text-primary">DL-TEAM</div>
                <div className="text-xs text-muted-foreground">© 2026 Все права защищены</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Icon name="Instagram" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}