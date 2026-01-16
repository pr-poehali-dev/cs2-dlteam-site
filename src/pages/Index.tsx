import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Player {
  id: number;
  nickname: string;
  realName: string;
  role: string;
  rating: number;
  kd: number;
  winrate: number;
  hs: number;
  matches: number;
}

interface Tournament {
  id: number;
  name: string;
  place: string;
  prize: string;
  date: string;
}

interface NewsItem {
  id: number;
  title: string;
  date: string;
  preview: string;
}

const players: Player[] = [
  { id: 1, nickname: 'DeathLord', realName: 'Алексей Иванов', role: 'AWPer', rating: 1.28, kd: 1.42, winrate: 68, hs: 54, matches: 156 },
  { id: 2, nickname: 'ShadowKing', realName: 'Дмитрий Петров', role: 'Entry Fragger', rating: 1.19, kd: 1.31, winrate: 65, hs: 48, matches: 148 },
  { id: 3, nickname: 'Lightning', realName: 'Максим Сидоров', role: 'Rifler', rating: 1.15, kd: 1.25, winrate: 67, hs: 51, matches: 152 },
  { id: 4, nickname: 'Phantom', realName: 'Сергей Новиков', role: 'Support', rating: 1.08, kd: 1.18, winrate: 64, hs: 45, matches: 145 },
  { id: 5, nickname: 'Commander', realName: 'Андрей Козлов', role: 'IGL', rating: 1.12, kd: 1.22, winrate: 66, hs: 49, matches: 160 },
];

const tournaments: Tournament[] = [
  { id: 1, name: 'ESL Pro League S18', place: '1 место', prize: '$175,000', date: 'Декабрь 2025' },
  { id: 2, name: 'BLAST Premier Fall', place: '2 место', prize: '$100,000', date: 'Ноябрь 2025' },
  { id: 3, name: 'IEM Katowice', place: '3-4 место', prize: '$40,000', date: 'Октябрь 2025' },
];

const news: NewsItem[] = [
  { id: 1, title: 'DL-Team выигрывает ESL Pro League!', date: '15 января 2026', preview: 'Наша команда одержала победу в грандиозном турнире ESL Pro League Season 18, обыграв в финале Team Vitality со счётом 2:1.' },
  { id: 2, title: 'Новый рекорд DeathLord: 42 фрага за матч', date: '10 января 2026', preview: 'Наш звездный AWPer установил личный рекорд, показав феноменальную игру против FaZe Clan на карте Mirage.' },
  { id: 3, title: 'Интервью с Commander о тактике команды', date: '5 января 2026', preview: 'Капитан команды рассказал о новых стратегиях и подготовке к предстоящим турнирам в 2026 году.' },
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
              <Button variant={activeTab === 'news' ? 'default' : 'ghost'} onClick={() => setActiveTab('news')}>
                Новости
              </Button>
              <Button variant={activeTab === 'team' ? 'default' : 'ghost'} onClick={() => setActiveTab('team')}>
                Состав
              </Button>
              <Button variant={activeTab === 'tournaments' ? 'default' : 'ghost'} onClick={() => setActiveTab('tournaments')}>
                Турниры
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
                <Badge className="mb-4 bg-primary text-primary-foreground">Чемпионы ESL Pro League S18</Badge>
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-foreground">
                  Покоряем вершины<br />киберспорта
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mb-6">
                  DL-Team — профессиональная команда Counter-Strike 2, демонстрирующая высочайший уровень игры на международной арене
                </p>
                <div className="flex gap-4 flex-wrap">
                  <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border">
                    <div className="text-3xl font-heading font-bold text-primary">68%</div>
                    <div className="text-sm text-muted-foreground">Винрейт</div>
                  </div>
                  <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border">
                    <div className="text-3xl font-heading font-bold text-primary">156</div>
                    <div className="text-sm text-muted-foreground">Матчей</div>
                  </div>
                  <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border">
                    <div className="text-3xl font-heading font-bold text-primary">$315K</div>
                    <div className="text-sm text-muted-foreground">Призовые</div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-heading font-bold mb-6 text-foreground">Последние новости</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {news.map((item, index) => (
                  <Card key={item.id} className="hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader>
                      <CardTitle className="font-heading text-foreground">{item.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Icon name="Calendar" size={14} />
                        {item.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{item.preview}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-8">Новости команды</h2>
            {news.map((item, index) => (
              <Card key={item.id} className="hover:border-primary transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-heading text-2xl text-foreground">{item.title}</CardTitle>
                    <Badge variant="outline" className="text-primary border-primary">{item.date}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.preview}</p>
                </CardContent>
              </Card>
            ))}
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
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <CardTitle className="font-heading text-2xl text-primary">{player.nickname}</CardTitle>
                        <CardDescription className="text-foreground/70">{player.realName}</CardDescription>
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary">{player.role}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Рейтинг</span>
                        <span className="font-heading font-bold text-lg text-primary">{player.rating}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">K/D</span>
                        <span className="font-heading font-bold text-foreground">{player.kd}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Винрейт</span>
                          <span className="font-heading font-bold text-foreground">{player.winrate}%</span>
                        </div>
                        <Progress value={player.winrate} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">HS%</span>
                          <span className="font-heading font-bold text-foreground">{player.hs}%</span>
                        </div>
                        <Progress value={player.hs} className="h-2 bg-muted" />
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <span className="text-sm text-muted-foreground">Матчей сыграно</span>
                        <span className="font-heading font-bold text-foreground">{player.matches}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tournaments' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-heading font-bold text-foreground mb-2">Достижения</h2>
              <p className="text-muted-foreground">Результаты последних турниров</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tournaments.map((tournament, index) => (
                <Card key={tournament.id} className="hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Trophy" className="text-primary" size={24} />
                      <Badge className="bg-primary text-primary-foreground">{tournament.place}</Badge>
                    </div>
                    <CardTitle className="font-heading text-xl text-foreground">{tournament.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Icon name="Calendar" size={14} />
                      {tournament.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-primary">
                      <Icon name="DollarSign" size={20} />
                      <span className="font-heading font-bold text-2xl">{tournament.prize}</span>
                    </div>
                  </CardContent>
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