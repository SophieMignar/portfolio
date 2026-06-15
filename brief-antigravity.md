# Brief Antigravity V3 — Portfolio Sophie

## Objectif réel

Créer une expérience mobile premium pour un forum tech.

Sophie ne distribuera pas de CV papier. Elle montrera un QR code. La personne qui scanne doit comprendre rapidement :

- qui est Sophie ;
- ce qu'elle cherche ;
- pourquoi son profil est intéressant ;
- quel angle lire selon son besoin : Business Analyst IT ou Audit IT / Risques SI ;
- comment la contacter ou télécharger le bon CV.

Ce n'est pas un site portfolio classique. Ce n'est pas un CV web. C'est une carte de visite interactive haut de gamme, pensée pour une interaction courte dans un forum.

## Source obligatoire

Lire impérativement ces fichiers avant d'écrire :

- `cv-business-analyst-it.txt`
- `cv-audit-it.txt`
- `README.md`

Les PDFs doivent rester téléchargeables :

- `Business-Analyst-Sophie.pdf`
- `Audit It_Sophie.pdf`

Ne pas inventer d'expériences, de chiffres, de missions ou de détails métier absents des CV.

## Priorité absolue : mobile-first

Le rendu mobile est prioritaire sur tout.

Référence mentale : écran téléphone de 390px de large.

Contraintes :

- aucun débordement horizontal ;
- aucun texte minuscule ;
- aucun paragraphe long ;
- aucun bloc qui demande de lire 20 secondes ;
- boutons tactiles confortables ;
- navigation immédiate ;
- page utilisable en marchant dans un forum ;
- chargement rapide ;
- animations légères qui ne gênent jamais le scroll.

Desktop doit être correct et élégant, mais il passe après mobile.

## Règle de compréhension

Le recruteur doit comprendre l'essentiel en moins de 10 secondes.

En 30 secondes, il doit pouvoir choisir :

- profil Business Analyst IT ;
- profil Audit IT / Risques SI ;
- télécharger un CV ;
- contacter Sophie.

En 2 minutes, il doit pouvoir creuser les missions et compétences.

## Direction artistique

Ne pas imposer une palette précise.

Choisir librement une direction artistique adaptée au profil de Sophie.

Contraintes seulement :

- élégant ;
- lumineux ;
- professionnel ;
- personnel ;
- moderne ;
- crédible ;
- pas dark ;
- pas corporate fade ;
- pas template CV ;
- pas esthétique cyberpunk ;
- pas rendu générique.

Le style peut s'inspirer de la rigueur des bons produits modernes, mais ne pas forcer une esthétique précise. La DA doit être choisie selon ce qui sert le mieux Sophie.

## Animation et exploration

Le site doit donner une sensation d'exploration, mais sans devenir lourd.

Utiliser :

- background animé très subtil et cohérent ;
- micro-interactions sur les cartes, boutons et choix de parcours ;
- transitions douces entre les angles BA et Audit ;
- reveals au scroll légers ;
- petits détails interactifs qui donnent du relief ;
- vrais icônes, jamais d'emojis.

L'animation doit faire premium, pas gadget.

## Structure attendue

Une page unique peut suffire, à condition que l'expérience soit claire.

Structure recommandée :

1. Premier écran très impactant
   - Sophie Kekemba
   - Business Analyst IT / Audit IT
   - CDI recherché
   - 2 boutons immédiats : "Profil BA IT" et "Profil Audit IT"
   - contact visible

2. Deux cartes de lecture
   - BA IT : cadrage, specs, UAT, documentation, conduite du changement
   - Audit IT : risques SI, conformité, OWASP, contrôle interne, IAM

3. Parcours BA
   - très court ;
   - orienté valeur ;
   - basé sur Bureau Veritas / VeriStar Green ;
   - pas de long storytelling.

4. Parcours Audit
   - très court ;
   - orienté risques et conformité ;
   - basé sur Anjoy IT, OWASP, ELK/Kibana, recommandations ;
   - pas de détails inventés.

5. Compétences
   - groupées ;
   - scannables ;
   - pas de liste interminable.

6. CTA final
   - télécharger CV BA ;
   - télécharger CV Audit ;
   - LinkedIn ;
   - email ;
   - téléphone si pertinent.

## Texte : limite stricte

Être direct et impactant.

Règles :

- hero : maximum 25 mots hors nom ;
- chaque carte : maximum 3 bullets ;
- chaque section : maximum 80 mots ;
- pas de paragraphes de plus de 2 lignes sur mobile ;
- privilégier titres courts, verbes d'action, preuves concrètes ;
- supprimer toute phrase décorative.

Le texte doit être écrit pour quelqu'un qui scanne vite, pas pour quelqu'un qui lit tranquillement un dossier.

## Positionnement à faire sentir

Sophie est un profil hybride :

- Business Analyst IT ;
- Audit IT / Risques SI ;
- Cybersécurité / conformité ;
- transformation digitale.

Positionnement possible, à adapter :

> Business Analyst IT avec culture cybersécurité, conformité et risques SI.

Ou :

> À l'interface entre métiers, équipes techniques et exigences de conformité.

## Contenu disponible

Expériences :

- Business Analyst IT, Bureau Veritas Group, Paris, depuis 01/2025.
- Projet VeriStar Green : transformation digitale d'une application critique à dimension internationale.
- Anjoy IT, Lyon, 01/2024 à 08/2024 : audit/sécurité, OWASP, ELK/Kibana, recommandations.
- SoftSolux, Lomé, 01/2021 à 09/2021 : systèmes, cloud, Azure AD / Active Directory, IAM.

Formation :

- Mastère Spécialisé SKEMA : Contrôle de Gestion, Audit SI, gouvernance IT.
- Master Cybersécurité et Cloud, ESTIAM.

Compétences :

- Business analysis ;
- cadrage fonctionnel ;
- spécifications ;
- user stories ;
- UAT ;
- documentation ;
- conduite du changement ;
- risques SI ;
- audit applicatif ;
- OWASP ;
- ISO 27001 / ISO 27005 ;
- COBIT ;
- NIST CSF ;
- IAM ;
- Power BI ;
- Excel ;
- Kibana ;
- Jira ;
- Confluence.

## À éviter absolument

- page desktop compressée sur mobile ;
- page trop longue ;
- portfolio verbeux ;
- storytelling lourd ;
- gros paragraphes ;
- fausses études de cas ;
- fausses métriques ;
- "senior" si non justifié ;
- emojis ;
- dark mode ;
- DA imposée par le brief ;
- animations inutiles ;
- design basique avec cards empilées sans intention.

## Livrable

Créer une nouvelle version from scratch dans `/home/juniro/portfolio_sophie`.

Fichiers attendus :

- `index.html`
- `styles.css`
- `app.js`

Ou une structure statique équivalente si nécessaire.

Le résultat doit pouvoir être servi directement avec :

```bash
python3 -m http.server 8877
```

