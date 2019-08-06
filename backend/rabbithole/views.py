
from django.shortcuts import render
from rest_framework import viewsets, generics       # add this
from .serializers import RabbitholeSerializer      # add this
from .models import Rabbithole  
from url_filter.integrations.drf import DjangoFilterBackend


class RabbitholeView(viewsets.ModelViewSet):       # add this
    serializer_class = RabbitholeSerializer          # add this
    queryset = Rabbithole.objects.all()  
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['category', 'sub_category']



