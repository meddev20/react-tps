# TP Answers - TaskFlow Project

## Séance 1 : Le Web Moderne & React

1- Le body contient juste une div root. C'est le CSR : le JavaScript construit toute la page dans le navigateur.
2- Les données en dur ne changent pas sans modifier le code. Une API permet de changer les données depuis un serveur.
3- Parce que "class" est un mot réservé en JavaScript.
4- Pour que React sache quel élément a changé. L'index peut poser problème si on change l'ordre.
5- Une seule fois parce qu'on a mis un tableau vide [].

---

## Séance 2 : Auth Context & Protected Layout

1- Ça évite d'utiliser l'authentification là où elle n'est pas définie.
2- On devrait passer les données de parent en enfant (prop drilling). Ça ferait beaucoup de props.
3- Pour que la page ne se recharge pas quand on clique sur envoyer.
4- Ça enlève le password de l'objet pour plus de sécurité.
5- Pour que le code soit mieux organisé et plus facile à comprendre.
6- Parce qu'il s'exécute avant que l'image ne s'affiche à l'écran.
7- Car il est synchrone et peut bloquer l'affichage s'il y a trop de calculs.

---

## Séance 3 : React Router, Axios & CRUD

1- Navigate est un composant qu'on peut renvoyer directement dans le rendu HTML.
2- Replace true efface la page de l'historique pour pas qu'on revienne en arrière.
3- Pour mettre à jour l'affichage instantanément sans refaire une requête réseau.
4- Axios part en erreur (catch) directement si c'est un 404, Fetch non.

---

## Séance 4 : MUI vs Bootstrap & Architecture BDD

1- 0 ligne de CSS, tout est dans le code avec la prop `sx`. Mon ancien Header avait 25 lignes de CSS.
2- MUI est plus long à écrire mais plus facile à comprendre car chaque composant a un nom clair. Bootstrap est plus court.
3- Je préfère `sx` car on n'a pas besoin de changer de fichier pour styliser, tout est au même endroit.

| Critère | Material UI | React-Bootstrap |
| :--- | :--- | :--- |
| Installation | Un peu long (4 packages) | Simple (2 packages) |
| Composants | Très nombreux | L'essentiel |
| Lignes CSS | 0 | 0 |
| Style | sx={{}} | className="" |
| Couleurs | Thème JS | Classes CSS |
| Responsive | Box et Grid | Container et Row |
| Lisibilité | Très claire | Claire |
| Documentation | Très complète | Bonne |
| Préférence | Material UI | Material UI |

4- Material UI, car c'est plus moderne et plus facile à personnaliser pour une grosse application.
5- Parce que React tourne dans le navigateur de l'utilisateur. On ne peut pas lui donner les codes de la base de données, c'est pas sécurisé.
6- Pas de sécurité pour les utilisateurs, lent si on a beaucoup de données, et pas de gestion de relations complexes.
7- Firebase est fait pour ça, il a un système spécial qui sécurise la connexion directement depuis le navigateur.
8- Remplacer le fichier JSON par une vraie base de données, créer un serveur sécurisé (Backend), et héberger l'application sur un vrai serveur.
9- Si la library n'est plus mise à jour, notre code peut devenir vieux. Ça rend aussi le site un peu plus lourd à charger.
10- Firebase, parce qu'il met à jour les données instantanément pour tout le monde sans effort.
