# Features


### Commands and Features
Obs: {channel} will be the name of the channel

Show what item is playing now
```bash
# https://myurl.io/{channel}/agora
!watchlist agora
<- 'Agora estamos assistindo (1) Yu Yu Hakusho (Anime)'
```

Show the queue list
```bash
# https://myurl.io/{channel}/fila
!watchlist fila
<- '
1. @wpkenpachii(Anime): Yu Yu Hakusho,
2. @sirzarakikenpachi(Série): Sons of Anarchy,
3. @anotherone(Filme): A Origem 14 2010 ‧ Ação/Ficção científica ‧ 2h 28m
4. @wpkenpachii(Série): Dexter
5. @anotherone(Filme): Green Book: O Guia 12 2018 ‧ Drama/Comédia ‧ 2h 10m
6. @wpkenpachii(Filme): A Ilha 14 2005 ‧ Ação/Ficção científica ‧ 2h 16m
7. @sirzarakikenpachi(Anime): Bleach
8. @wpkenpachii(Anime): Hells Paradise
'
```

Show the queue filtered by category
```bash
# https://myurl.io/{channel}/cat?cat=anime
# Options: anime | filme | serie
!watchlist cat anime
<- '
Animes:
1. @wpkenpachii(Anime): Yu Yu Hakusho
7. @sirzarakikenpachi(Anime): Bleach
8. @wpkenpachii(Anime): Hells Paradise
'
```

Show the queue filtered by owner
```bash
# https://myurl.io/{channel}/owner?owner=@sirzarakikenpachi
!watchlist owner @wpkenpachii
<- '
@wpkenpachii:
1. @wpkenpachii(Anime): Yu Yu Hakusho,
4. @wpkenpachii(Série): Dexter,
6. @wpkenpachii(Filme): A Ilha 14 2005 ‧ Ação/Ficção científica ‧ 2h 16m,
8. @wpkenpachii(Anime): Hells Paradise
'
```

Add new item to the queue
```bash
# https://myurl.io/{channel}/add?owner=@sirzarakikenpachi&cat=anime&title="Yu Yu hakusho&seasons=3"
!watchlist add @sirzarakikenpachi anime 'Yu Yu Hakusho' 3
<- 'Add new item Yu Yu Hakusho (Anime) by @sirzarakikenpachi'
```

Closing item on queue by item_id
```bash
# https://myurl.io/{channel}/close?item_id=1"
!watchlist close @wpkenpachii anime 'Yu Yu Hakusho' 3
<- 'Add new item Yu Yu Hakusho (Anime) by @wpkenpachii'
```

Closing items on queue by owner (will close all items from specific owner)
```bash
# https://myurl.io/{channel}/close?owner=1"
!watchlist close @wpkenpachii anime 'Yu Yu Hakusho' 3
<- '
Closed items from @wpkenpachii:
1. @wpkenpachii(Anime): Yu Yu Hakusho,
4. @wpkenpachii(Série): Dexter,
6. @wpkenpachii(Filme): A Ilha 14 2005 ‧ Ação/Ficção científica ‧ 2h 16m,
8. @wpkenpachii(Anime): Hells Paradise
'
```

Closing items on queue by category name (will close all items from specific category)
```bash
# https://myurl.io/{channel}/close?cat=anime"
!watchlist close @wpkenpachii anime 'Yu Yu Hakusho' 3
<- '
Closed items from category anime:
1. @wpkenpachii: Yu Yu Hakusho,
7. @sirzarakikenpachi: Bleach,
8. @wpkenpachii: Hells Paradise,
'
```

### Obs
O nivel de acesso dos comandos é totalmente gerenciado pelos canais. E são definidos na hora da criação dos comandos.
