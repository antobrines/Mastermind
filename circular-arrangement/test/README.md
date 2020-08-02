# circular-arrangement

Une simple classe permettant d'organiser uniformément un ensemble d'élément en cercle. Le rayon du cercle est déterminé automatiquement à partir du nombre d'éléments.
Chaque élément est considéré comme un disque de rayon 0.5 et l'organisation garantit qu'ils ne se chevauchent pas.
Le cercle sur lequel sont disposés les éléments à un rayon minimum de 1.

La bibliothèque exporte une classe `CircularArrangement`, nommée ou par défaut tout en définissant une propriétée `CircularArrangement` dans la variable `window` si celle-ci existe.

La classe `CircularArrangement` permet de construire une instance à partir d'un nombre d'éléments à positionner.
Il est ensuite possible à partir de l'indice d'un élément (de 0 à n-1) d'obtenir ses coordonnées à l'aide de la méthode `coordinates`.
Les coordonnées de l'élément sont retournées afin d'être utilisées en positionnement *CSS* `absolute`, la mèthode retourne donc un objet contenant deux propriétés&nbsp;: `left` et `top` contenant les valeurs requises, exprimées en `"em"` unité comprise.

```
const circularArrangement = new CircularArrangement(6);
for (let i=0; i<6; i++) {
    ...
    const coords = circularArrangement.coordinates(i);
    diskDOMElt.style.left = coords.left; //
    diskDOMElt.style.top = coords.top; //
    ...
}
```