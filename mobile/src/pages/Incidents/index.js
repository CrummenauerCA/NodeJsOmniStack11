import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import React, { useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'

import { useNavigation } from "@react-navigation/native";

import styles from './styles'

import api from '../../services/api'

export default function Incidents() {
  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()

  function navigationToDetail(incident) {
    navigation.navigate('Detail', { incident })
  }

  async function loadIncidents() {
    if (loading) {
      return
    }

    if (total > 0 && incidents.length === total) {
      return
    }

    setLoading(true)
    const response = await api.get('incidents', {
      params: { page }
    })
    setIncidents([...incidents, ...response.data])

    setTotal(response.headers['x-total-count'])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    loadIncidents()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>

      <FlatList style={styles.incidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={true}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{item.name}</Text>

            <Text style={styles.incidentProperty}>Caso:</Text>
            <Text style={styles.incidentValue}>{item.description}</Text>

            <Text style={styles.incidentProperty}>Valor:</Text>
            <Text style={styles.incidentValue}>{
              Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
              }).format(item.value)
            }</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigationToDetail(item)}
            >
              <Text style={styles.detailsBottonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}