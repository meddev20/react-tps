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
