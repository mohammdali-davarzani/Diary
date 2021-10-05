from django.urls import path
from .views import * 

urlpatterns = [
    path('', getRoutes, name='routes'),
    path('memoirs/', getMemoirs, name='memoirs'),
    path('memoirs/<int:pk>/', getMemoir, name='memoir'),
    path('memoirs/create/', createMemoir, name='memoir_create'),
    path('memoirs/<int:pk>/update/', updateMemoir, name='memoir_update'),
    path('memoirs/<int:pk>/delete/', deleteMemoir, name='memoir_delete'),
]