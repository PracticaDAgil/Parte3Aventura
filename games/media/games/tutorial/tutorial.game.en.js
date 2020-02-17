// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "",
            {
                enter: function(character, system, from) {
                    system.doLink('introduccion');
                }
            }
        ),
    introduccion: new undum.SimpleSituation (
            "<h1>La tribu de Kattegat</h1><p>Acabas de llegar a <a href='https://vikings.fandom.com/es/wiki/Kattegat' class='raw' target='_new'>Kattegat.</a><\p><br>\
            <p>Tras un saqueo, el cual ha sido muy exitoso, por fin estás de vuelta en casa.\
            Y traes contigo un tesoro de 100 monedas de oro, una corona y una espada.</p>\
            <img height=350 width=500 src='./media/img/kattegat1.png'> <br>\
            <p>Al entrar en la tribu, recuerdas que Kattegat está gobernado por el\
            <a href='https://vikings.fandom.com/es/wiki/Conde_Haraldson' class='raw' target='_new'>Conde Haraldson,</a>\
            con el cual tuviste tus rencillas en el pasado, y no os tenéis mucho aprecio.<\p>\
            <p>Al entrar a la tribu puedes ir a <a href='verfamilia'>Visitar a tu familia,</a> la cual llevas varias \
            semanas sin ver, o <a href='verconde'>ir a ver al Conde Hardson,</a> el cual ya ha sido advertido de tu \
            presencia en el condado pues sus soldados te han visto entrar.</p>",
            
        ),
		
        verconde: new undum.SimpleSituation (
            "<h1>El salón del conde Haraldson</h1>\
            <p>Al entrar al salón, Haraldson te pregunta malhumorado:<br>-¿Por qué no viniste aquí primero al llegar? Sabes que estu obligación al volver de un saqueo.\
            <img height=667 width=500 src='./media/img/conde1.jpg'></p>\
            <p>Tras esa desafiante preguntas decides <a href='pedirdisculpas'>pedirle disculpas</a>\
             por tu actitud o responderle que tu deber es visitar a tu familia primero.\
            </p>",
        ),
        pedirdisculpas: new undum.SimpleSituation(
            "<p>grasias</p>"
        ),
		
		verfamilia: new undum.SimpleSituation (
            "<h1>La casa de tu familia</h1>\
            <p>Te estás dirigiendo a tu casa, y ves en la entrada dos hombres del Conde Haraldson custodiando la puerta.\
			Uno de ellos te advierte que no puedes entrar, pues el Conde exige verte inmediatamente.\
			Tú, Ragnar Lothbrok, uno de los vikingos con más éxito vivos, te contienes y decides calmarte e ir a <a href='verconde'>visitar al Conde,</a>\
			pues no quieres crear problemas tan pronto.\
			</p>"
        )    
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    corona: new undum.OnOffQuality(
        "Corona", {priority:"0001", group:'stats'}
    ),
    espada: new undum.OnOffQuality(
        "Espada", {priority:"0001", group:'stats'}
    ),
    monedas: new undum.IntegerQuality(
        "Monedas", {priority:"0001", group:'stats'}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.monedas = 100;
    character.qualities.corona = 1;
    character.qualities.espada = 1;
    system.setCharacterText("<p>Comienzas con un tesoro en tu poder.</p>");
};
