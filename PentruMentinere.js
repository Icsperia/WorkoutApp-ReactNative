import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function PentruMentinere({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.titlu}>Plan alimentar pentru mentinere</Text>

                    <View style={styles.card}>
                        <Text style={styles.cardText}>
                            Este dovedit stiintific faptul ca o dieta bogata in fructe si legume are numeroase beneficii pentru sanatate (in principal, reduce riscul de boli cronice). Cu toate acestea, schimbarile majore in dieta nu sunt intotdeauna usor de facut. In locul unor schimbari majore, este indicat sa incepi cu unele mai mici si mai usor de facut. Acest articol iti spune ce poti schimba daca vrei sa ai o dieta echilibrata si sanatoasa (2).
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.subtitlu}>Nu manca repede</Text>
                        <Text style={styles.cardText}>
                            Ritmul in care mananci influenteaza cat de mult mananci si prin urmare indicele de masa corporala (IMC). Pofta de mancare este influentata de hormoni, acestia sunt substantele care semnaleaza creierului daca ti-e foame sau nu. Creierul are nevoie de aproximativ 20 de minute pentru a primi un asemenea mesaj, de aceea mancatul mai lent poate oferi creierului timpul de care are nevoie pentru a percepe senzatia de saturatie.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.subtitlu}>Consuma fibre</Text>
                        <Text style={styles.cardText}>
                            Bogate în fibre și nutrienți, cerealele integrale (pâine, ovăz, orez brun) sprijină digestia și controlul glicemiei. Ajută la sațietate fără calorii goale.
                        </Text>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://media.istockphoto.com/id/1020930592/ro/fotografie/alimente-bogate-%C3%AEn-fibre.jpg?s=612x612&w=0&k=20&c=jUOWCrmxH4R8SUJm9lHdyxcIwK7Xxqi2q0ZksoW6LCM=',
                            }}
                        />
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.subtitlu}>Consuma oua, de preferinta la micul dejun</Text>
                        <Text style={styles.cardText}>
                            Ouale sunt foarte sanatoase, mai ales daca le mananci dimineata. Acestea sunt bogate in proteine de inalta calitate si multe substante nutritive esentiale (cum ar fi colina). Asadar, simpla inlocuire a micului dejun pe care il consumi in fiecare dimineata cu oua poate avea beneficii majore pentru sanatatea ta.
                        </Text>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://assets.protv.ro/assets/foodstory2019/2015/01/23/image_galleries/5624/10-idei-de-mic-dejun-de-weekend-cu-oua-ochiuri_1_size1.jpg',
                            }}
                        />
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.subtitlu}>Creste aportul de proteine</Text>
                        <Text style={styles.cardText}>
                            Consumul unei mese bogate in proteine scade nivelul hormonului foamei mai mult decat o masa bogata in carbohidrati. Mai mult, proteinele pot creste usor numarul de calorii pe care le arzi in fiecare zi. Aportul de proteine este important si pentru prevenirea pierderii de masa musculara, care poate aparea odata cu pierderea in greutate si pe masura ce inaintam in varsta.
                        </Text>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://backend.drmax.ro/media/amasty/blog/Alimente_bogate_in_proteine_1.jpg'
                            }}
                        />
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.subtitlu}>Hidrateaza-te adecvat</Text>
                        <Text style={styles.cardText}>
                            Consumul de apa este foarte important pentru sanatate. Unele studii (5) au aratat ca apa poate sustine pierderea in greutate si poate chiar creste usor numarul de calorii pierdute. Studiile arata, de asemenea, ca apa consumata inainte de mese poate reduce apetitul si aportul alimentar. Se recomanda consumul de apa, nu de sucuri, pentru a reduce aportul de zahar si calorii.
                        </Text>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://cugetliber.ro/imagini/mari/hidratarea-1626022686.jpg',
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

export default PentruMentinere;
