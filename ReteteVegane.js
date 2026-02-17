import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function ReteteVegane({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.titlu}>Plan alimentar vegan</Text>

                    <View style={styles.card}>
                        <Text style={styles.cardText}>
                            Regim vegan înseamnă mai mult decât un stil alimentar, este un mod de viață care încearcă să excludă orice formă de exploatare a animalelor, indiferent că este pentru hrană, îmbrăcăminte sau orice alt scop.
                            {'\n\n'}
                            Din aceste motive, un regim vegan exclude toate produsele de origine animală, inclusiv carne, ouă și lactate. Există o mulțime de opțiuni vegane delicioase inclusiv pentru burgeri, iaurt, paste, sosuri, dulciuri sau orice alt aliment.
                        </Text>
                    </View>


                    <View style={styles.card}>
                        <Text style={styles.subtitlu}>Regim vegan de mai multe tipuri</Text>
                        <Text style={styles.cardText}>
                            Există mai multe tipuri de regim vegan. Cele mai frecvente includ:
                        </Text>
                        <Text style={styles.cardText}>
                            Dieta vegană cu alimente integrale: o dietă bazată pe mai multe sortimenete de alimente vegetale integrale, cum ar fi fructe, legume, cereale integrale, leguminoase, nuci și semințe.
                            {'\n\n'}
                            Dieta vegană cu alimente crude (dieta rawvegană): o dietă vegană bazată pe fructe, legume, nuci, semințe și vegetale crude sau preparate la temperaturi mai mici de 48 °C.
                            80/10/10: dieta 80/10/10 este o dietă vegană cu alimente crude, care limitează consumul de vegetale bogate în grăsimi, precum nuci și avocado și se bazează, în principal, pe fructe crude și vegetale cu frunze verzi. Mai e cunoscută sub denumirea de dieta vegană cu conținut scăzut de grăsimi, cu alimente crude sau fructarianism.
                            {'\n\n'}
                            Dieta cu amidon: o dietă vegană cu conținut scăzut de grăsimi, bogată în carbohidrați, similară cu dieta 80/10/10, dar care se bazează pe alimente cu amidon gătite precum cartofii, orezul și porumbul, în loc de fructe.
                            Crudități până la ora 16.00: o dietă vegană cu conținut scăzut de grăsimi, asemănătoare cu dieta 80/10/10 și cu cea pe bază de amidon. Până la ora 16.00 se consumă doar alimente crude, iar la cină există opțiunea unei mese cu vegetale gătite.
                            {'\n\n'}
                            Dieta proaspătă: o dietă vegană cu alimente crude. Cei care o urmează, mănâncă doar crudități sau vegetale preparate la temperaturi scăzute.
                            {'\n\n'}
                            Dieta vegană cu junk food: o dietă vegană care se bazează foarte mult pe înlocuiori ai cărnii, brânzeturi vegetale, cartofii prăjiți, deserturi vegane și alte alimente vegane procesate.
                        </Text>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
                            }}
                        />
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.subtitlu}>Alimente de evitat</Text>
                        <Text style={styles.cardText}>
                            Carne de vită, miel, porc, vițel, cal, pui, curcan, gâscă, rață, prepeliță, organe, etc;
                            {'\n\n'}
                            Pește și fructe de mare: toate tipurile de pește, hamsii, creveți, calamari, scoici, calamari, midii, crab, homar, icre etc;
                            {'\n\n'}
                            Produse lactate: lapte, iaurt, brânză, unt, smântână, etc;
                            Ouă de găină, prepeliță, gâscă, rață, curcan, struț, etc;
                            {'\n\n'}
                            Produse apicole: miere, polen, etc.
                            {'\n\n'}
                            Ingrediente de origine animală: zer, cazeină, lactoză, gelatină, cochinină sau carmină, izinglass, shellac, L-cisteină, vitamina D3 derivată din produse animale și acizi grași omega-3 din pește.
                        </Text>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://storage.radiomoldova.md/images/6fe0ea8b-0e22-423e-a090-273f5c40965b.jpg',
                            }}
                        />
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.subtitlu}>Alimente pe care le consumă veganii</Text>
                        <Text style={styles.cardText}>
                            Veganii înlocuiesc produsele de origine animală cu cele pe bază de plante, cum ar fi:
                            Tofu, tempeh și seitan: acestea oferă o alternativă versatilă bogată în proteine ​​pentru carne, brânzeturi și ouă.
                            {'\n\n'}
                            Leguminoase: fasolea, lintea și mazărea sunt surse excelente nutrienți și compuși vegetali benefici;
                            {'\n\n'}
                            Oleaginoase și unt din oleaginoase: nucile, alunele, migdalele, mai ales cele neprăjite, sunt surse excelente de fier, fibre, magneziu, zinc, seleniu și vitamina E;
                        </Text>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://andreeachinesefood.ro/wp-content/uploads/2019/03/Salata-cu-linte-patrunjel-si-nuci9.jpg',
                            }}
                        />
                    </View>


                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        padding: 16,
        backgroundColor: '#f0f4f8',
    },
    titlu: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#2c3e50',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 220,
        borderRadius: 10,
        resizeMode: 'cover',
        marginTop: 10,
    },
    subtitlu: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#34495e',
        textAlign: 'center',
    },
    cardText: {
        fontSize: 16,
        color: '#2d3436',
        marginTop: 10,
        textAlign: 'justify',
    },
});

export default ReteteVegane;
